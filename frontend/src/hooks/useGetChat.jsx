/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useEffect, useState } from 'react'

const useGetChat = () => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("http://localhost:7439/user/all-users")
                console.log(res.data)
                setConversations(res.data.allUsersExceptMyself);
            } catch (error) {
                console.log(error)
            }
        }

        getConversations();
    }, [])
  return  conversations   
}

export default useGetChat
