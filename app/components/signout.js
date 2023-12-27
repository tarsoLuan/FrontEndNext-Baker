'use client'

import { handleSignOut } from '../lib/users';

export default function SessionApp() {
    return <a className='cursor-pointer' onClick={ () => handleSignOut() }>Sair</a>
}
