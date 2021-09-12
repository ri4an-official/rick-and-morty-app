import { FC } from 'react'
import { Redirect } from 'react-router'
import user from '../../../models/store/user'

export const withAuth = (Component: FC<any>) => (props: any) =>
    user.auth ? <Component {...props} /> : <Redirect to={'/login'} />
