//import { InputField } from '../components/Input/Input'
//import { SearchInput } from '../components/Search/SearchInput'
import { Button } from '../components/Button/Button'
import { ListItem } from "@/components/ListItem/ListItem";
import {Sidebar } from "@/components/SideBar/SideBar"

// const sampleCountries = [
//   { id: "1", name: "Canada", continent: "North America", flag: "https://flagcdn.com/ca.svg" },
//   { id: "2", name: "France", continent: "Europe", flag: "https://flagcdn.com/fr.svg" },
//   { id: "3", name: "Japan", continent: "Asia", flag: "https://flagcdn.com/jp.svg" },
// ];

export default function Home() {

  const user = {
    name: "Brian Johnson",
    image: "/placeholder.svg?height=80&width=80",
    initials: "BJ",
  }

  // Sample navigation items
  const navigationItems = [
    {
      title: "Countries",
      href: "/countries",
 
    },
    // Add more navigation items as needed
  ]
  return (
    <div>
      {/* <SearchInput /> */}
      {/* <InputField /> */}
      {/* <Button>Click Me</Button>
      
      {sampleCountries.map((country) => (
        <ListItem
          key={country.id}
          id={country.id}
          title={country.name}
          subtitle={country.continent}
          iconUrl={country.flag}
        /> */}
      {/* ))} */}

      <Sidebar user={user} items={navigationItems}/>
    </div>
  );
}
