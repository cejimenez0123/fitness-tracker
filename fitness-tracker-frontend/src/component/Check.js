export default check= (token)=>{
    axios({
        method: 'post',
        url: "http://localhost:3000/", 
        data: {token}
      }).then(res=>{
        
        
      })

}