'use server'

import {auth} from '../../nextauth'

export default async function SessionApp() {
    const userInfo = await auth()

    console.log('userInfo ->', userInfo)

    if (userInfo?.user) {
        return <a href="/sair">{userInfo.user?.name}</a>
    }

    return <a href="/entrar">Entrar</a>
}


