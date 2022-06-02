import { useEffect, useState } from "react";

const useUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('user.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return [users];
}

export default useUsers;