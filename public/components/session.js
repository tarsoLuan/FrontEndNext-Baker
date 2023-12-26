'use strict'
import { useSession } from "next-auth/react"

const SessionApp = () => {
    const {  data, status } = useSession()
    console.log('statusfodase ->', status)
    console.log('sessionfodase ->', data?.user?.name)
    

    if (status === "authenticated") {
        console.log('session ->', JSON.stringify(data))
        return <p>{data.user?.name}</p>
    }

    return <a href="/entrar">Entrar</a>
}

export default SessionApp