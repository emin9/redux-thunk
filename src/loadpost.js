

export const LoadPost = () =>{

    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
            dispatch({
                type : 'load',
                payload : json
            })
        }
           
        
        )
    }
   
}

