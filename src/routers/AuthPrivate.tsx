import { ReactNode } from 'react'; import { Route, RouteProps } from 'react-router-dom'

interface IAuthRouter extends RouteProps {
    isPrivate?: boolean;
}

export const AuthPrivate: React.FC<IAuthRouter> = ({ isPrivate, ...rest }) => {
    console.log(isPrivate)

    return <Route {...rest} />
}