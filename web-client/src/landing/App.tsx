// external
import React, { ErrorInfo } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import 'normalize.css';

// inter
import { NotFound } from '~/core/molecules/NotFound';
import { componentRouteMappings } from '~/core/componentRouteMappings';
import { history } from '~/redux';
import { store } from '~/store';
import { ThemeProvider } from '~/theming/ThemeProvider';

// intra
import { Header } from '~/landing/Header';
import { Footer } from '~/landing/Footer';
import { Home } from '~/landing/Home';
import { ErrorScreen } from '~/landing/ErrorScreen';

interface State {
    hasError: boolean;
}

interface Props { }

export class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <ThemeProvider>
                        <Container>
                            <Header />
                            <Body>
                                <Main>
                                    {this.state.hasError ? <ErrorScreen /> : <Switch>
                                        {componentRouteMappings.map(crm => (
                                            <Route
                                                exact={crm.exact}
                                                key={crm.route}
                                                path={crm.route}
                                                component={crm.component as any}
                                            />
                                        ))}
                                        <Route exact={true} route={'/'} component={Home} />
                                        <Route component={NotFound} />
                                    </Switch>}
                                </Main>
                            </Body>
                            <Footer />
                        </Container>
                    </ThemeProvider>
                </ConnectedRouter>
            </Provider>
        );
    }
};

const Body = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`;

const Main = styled.main`
    ${({ theme }) => `
		display:
    	flex: 1;
		width: 100%;
		justify-content: center;
	`}
`;

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;
