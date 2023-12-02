export function ReleasedTime(MDate:string):string{
    const now =  new Date()
    const createdAt = new Date(MDate);
    let difference = now.getTime() - createdAt.getTime();
    let hours = difference/ 36e5
       if(hours >=8760){
         return Number.parseFloat((hours/8760).toString()).toFixed(0) + " years ago"
       }
    return hours > 24? Number.parseFloat((hours/24).toString()).toFixed(0)+ " days ago" : Number.parseFloat(hours.toString()).toFixed(0) + " hours ago"
}