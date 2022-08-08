import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth/AuthContext'

export const Private = () => {
  const auth = useContext(AuthContext);
  return (
    <div>Olá, {auth.user?.name}</div>
  )
}