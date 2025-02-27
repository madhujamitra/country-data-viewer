//import { InputField } from '../components/Input/Input'
//import { SearchInput } from '../components/Search/SearchInput'
//import { CustomButton } from '../components/Button/Button'
import { ListItem } from "@/components/ListItem/ListItem";

const sampleCountries = [
  { id: "1", name: "Canada", continent: "North America", flag: "https://flagcdn.com/ca.svg" },
  { id: "2", name: "France", continent: "Europe", flag: "https://flagcdn.com/fr.svg" },
  { id: "3", name: "Japan", continent: "Asia", flag: "https://flagcdn.com/jp.svg" },
];

export default function Home() {
  return (
    <div>
      {/* <SearchInput /> */}
      {/* <InputField /> */}
      {/* <CustomButton>Click Me</CustomButton> */}
      
      {sampleCountries.map((country) => (
        <ListItem
          key={country.id}
          id={country.id}
          title={country.name}
          subtitle={country.continent}
          iconUrl={country.flag}
        />
      ))}
    </div>
  );
}
