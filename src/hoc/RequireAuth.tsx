import { ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '../hooks/reduxHooks'

interface RequireAuthState {
	children: ReactNode
}

const RequireAuth = ({ children }: RequireAuthState): JSX.Element | null => {
	const location = useLocation()
	const { isAuth } = useAppSelector(state => state.auth)
	if (!isAuth) {
		return <Navigate to='/auth' state={{ from: location }} />
	}
	return children as JSX.Element | null
}

export default RequireAuth
