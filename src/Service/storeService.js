export const KEY_TOKEN ="KEY_TOKEN"
class storeService{
 SaveTokenStore(token){
  localStorage.setItem(KEY_TOKEN,token)
 }
 getTokenStore(){
  return localStorage.getItem(KEY_TOKEN)
 }
}
export default storeService