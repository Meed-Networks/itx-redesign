
import { IEmail } from '@/app/api/email/route';
import { API_URL, axios } from './axios';


// export async function sendEmail(data: IEmail) {
//   const res = await axios.post<IEmail>('/email', data);
//   return res.data; 
// }

export async function sendEmail(data: IEmail) {
  await fetch(`${API_URL}/email`, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then(response =>{
    console.log(response);
    if(response.ok){
        //  console.log(response.json()); //first consume it in console.log
        return response.json(); //then consume it again, the error happens
    }
  })
}