// here we created and array containing the objects of city
// will use this both for sidebar and filter functionality
export const cities = [
    {id: 1, name: "Lagos, Nigeria", lat:6.465422, long:3.406448, zoom:5},
    {id: 2, name: "Bremen, Germany", lat:53, long:8, zoom:5},
    {id: 3, name: "Bristol, England", lat:51, long:2, zoom:5},
    {id: 4, name: "Calcutta, India", lat:22, long:88, zoom:5},
    {id: 5, name: "Caracas, Venezuela", lat:10, long:67, zoom:5},
    {id: 6, name: "Dakar, Senegal", lat:14,long:17, zoom:5},
    {id: 7, name: "Durban, South Africa", lat:29,long:30, zoom:5},
    {id: 8, name: "Edinburgh, Scotland", lat:55,long:3, zoom:5},
    {id: 9, name: "Glasgow, Scotland", lat:55, long:4, zoom:5},
    {id: 10, name: "Guayaquil, Ecuador", lat:2, long:79, zoom:5},
    {id: 11, name: "Havana, Cuba", lat:23, long:82, zoom:5},
    {id: 12, name: "Helsinki, Finland", lat:60, long:25, zoom:5},
    {id: 13, name: "Iquique, Chile", lat:20, long:70, zoom:5},
    {id: 14, name: "Irkutsk, Russia", lat:52, long:104, zoom:5},
    {id: 15, name: "Lisbon, Portugal", lat:38, long:9, zoom:5},
    {id: 16, name: "London, England", lat:51, long:0, zoom:5},
    {id: 17, name: "Manchester, England", lat:53, long:2, zoom:5},
    {id: 18, name: "Nairobi, Kenya", lat:1, long:36, zoom:5},
    {id: 19, name: "Osaka, Japan", lat:34, long:135, zoom:5},
    {id: 20, name: "Paris, France", lat:48, long:2, zoom:5},
    
    
    
]


// created interface for the city array
// which containers object of individual city
export interface Icity{
    id:number;
    name: string;
    lat:number;
    long:number;
    zoom:number
}