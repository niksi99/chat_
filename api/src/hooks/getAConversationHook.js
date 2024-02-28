/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import axios from "axios"

function getAConversationHook() {
    const [conversations, setConversations] = useState([])

    useEffect(() => {
        const getAll = async () => {
            try {
                const results = await axios.get("http://localhost:7439/user/all-users")   
                //console.log(results)         
                setConversations(results.data.allUsersExceptMyself)
            } catch (error) {
                console.log(error)
            }
        }
        getAll();
    }, [])

  return conversations
}

export default getAConversationHook