import React, { useState, useEffect } from 'react'
import Search from './Search'
import { useNavigate } from "react-router-dom";


const Post = () => {
    const [ post, setPost ] = useState([])
    const  navigate = useNavigate()



//     useEffect(() => {
//         const post = async() => {
//             fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/posts', {
//   method: "POST",
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer TOKEN_STRING_HERE'
//   },
//   body: JSON.stringify({
//     post: {
//       title: "My favorite stuffed animal",
//       description: "This is a pooh doll from 1973. It has been carefully taken care of since I first got it.",
//       price: "$480.00",
//       willDeliver: true
//     }
//   })
// }).then(response => response.json())
//   .then(result => {
//     console.log(result);
//   })
//   .catch(console.error);
//   {
//     "success"; true,
//     "error"; null,
//     "data"; {
//         "post"; {
//             "location"; "Bronx, NY",
//             "willDeliver"; false,
//             "messages"; [],
//             "active"; true,
//             "_id"; "5e8d1bd48829fb0017d2233b",
//             "title"; "Schwinn Bicycle",
//             "price"; "3.88",
//             "description"; "This is a 19 speed bicycle, barely used.",
//             "author"; {
//                 "_id"; "5e8d1a02829c8e0017c20b55",
//                 "username"; "joe1234"
//             },
//             "createdAt"; "2020-04-08T00:33:24.157Z",
//             "updatedAt"; "2020-04-08T00:33:24.157Z",
//             "__v"; 0,
//             "isAuthor"; true
//         }
//     }
// }
//         }
//     }, [])

const showNewPost = () => {
    navigate('/post/add')
}
    return(
        <>
        <Search />
        <h1 onClick={showNewPost}>Add New Post</h1>
        </>
    )
}

export default Post