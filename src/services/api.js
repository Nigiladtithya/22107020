const BASE_URL="http://20.244.56.144/evalution-service";
export async function register(){
    const payload={
        companyName: "Nigil private limited",
        clientName:"nigil",
        ownerName:"Nigil",
        ownerEmail:"nigil@gmail.com",
        rollno:"22107020",
        accessCode:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ5NzA3NjYwLCJpYXQiOjE3NDk3MDczNjAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjBmZTE0NDg4LTRlNTEtNDBiZi1iZDc5LTJmYmM4M2U1NDViMCIsInN1YiI6Im5pZ2lsYWR0aXRoeWFyLmJlYzIyQHJhdGhpbmFtLmluIn0sImVtYWlsIjoibmlnaWxhZHRpdGh5YXIuYmVjMjJAcmF0aGluYW0uaW4iLCJuYW1lIjoibmlnaWwgYWR0aXRoeWEgciIsInJvbGxObyI6IjIyMTA3MDIwIiwiYWNjZXNzQ29kZSI6Ik1WR3dFRiIsImNsaWVudElEIjoiMGZlMTQ0ODgtNGU1MS00MGJmLWJkNzktMmZiYzgzZTU0NWIwIiwiY2xpZW50U2VjcmV0IjoicHRWQ1FRbWNRVVRER0ZFUSJ9.ALGerK-BVRXfTeCkkiGaw-cvtK-7WyQHeqtvQaxZMO0"

    };
    const res =await fetch(`${BASE_URL}/register`,{
        method:"POST",
        headers:{"content-Type" :"application/json"},
        body: JSON.stringify(payload)
    });
    if(!res.ok){
        const error=await res.join();
        throw new error(error.message || "Registration failed");
    }
    return res.JSON();
}
 export async function authenticate(clientID, clientSecret) {
     const payload={
        companyName: "Nigil private limited",
        clientName:"nigil",
        ownerName:"Nigil",
        ownerEmail:"nigil@gmail.com",
        rollno:"22107020",
        accessCode:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ5NzA3NjYwLCJpYXQiOjE3NDk3MDczNjAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjBmZTE0NDg4LTRlNTEtNDBiZi1iZDc5LTJmYmM4M2U1NDViMCIsInN1YiI6Im5pZ2lsYWR0aXRoeWFyLmJlYzIyQHJhdGhpbmFtLmluIn0sImVtYWlsIjoibmlnaWxhZHRpdGh5YXIuYmVjMjJAcmF0aGluYW0uaW4iLCJuYW1lIjoibmlnaWwgYWR0aXRoeWEgciIsInJvbGxObyI6IjIyMTA3MDIwIiwiYWNjZXNzQ29kZSI6Ik1WR3dFRiIsImNsaWVudElEIjoiMGZlMTQ0ODgtNGU1MS00MGJmLWJkNzktMmZiYzgzZTU0NWIwIiwiY2xpZW50U2VjcmV0IjoicHRWQ1FRbWNRVVRER0ZFUSJ9.ALGerK-BVRXfTeCkkiGaw-cvtK-7WyQHeqtvQaxZMO0"

    };
     const res =await fetch(`${BASE_URL}/auth`,{
        method:"POST",
        headers:{
            "content-Type" :"application/json",
        clientID,
       clientSecret
},
        body: JSON.stringify(payload)
    });
     if(!res.ok){
        const error=await res.join();
        throw new error(error.message || "Auth failed");
    }
    const data=await res.json();
    return data.access_token;
 }
 export async function getTopCompanies(sector, token ,topN=10, sortBy="marketCap") {
const url=`http://20.244.56.144/evalution-service/companies/${sector}?top=$(topN}&sortBy{sortBy)`;
const res=await fetch(url,{
    method:"GET",
    headers:{
        Authorization:`Bearer ${token}`
    }
}) ;
  if(!res.ok){
        const error=await res.join();
        throw new error(error.message || "Failed to fetch comapnies");
    }
    return res.json();
 }
 