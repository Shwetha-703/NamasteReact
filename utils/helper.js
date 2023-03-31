
export function filterData(searchText, restaurants){
    const filterdata =  restaurants.filter(res => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
    return filterdata;
}