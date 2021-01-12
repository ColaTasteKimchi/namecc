import {useState} from 'react';
import InsertName from './InsertName';
import ShowCompatibility from './ShowCompatibility';
const Container =()=>{
    
    const [name1, setRName1] = useState('');
    const [name2, setRName2] = useState('');
    
    return(
        <div className="Container">
            <InsertName RName1={setRName1} RName2={setRName2}/>
            <ShowCompatibility name1={name1} name2={name2}/>
        </div>
   );

};

export default Container;