import {useState} from 'react';

const InsertName = ({RName1, RName2}) =>{
    
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');

    const inputChange1 =(e)=>{
        setName1(e.target.value);
    }
    const inputChange2 =(e)=>{
        setName2(e.target.value);
    }
          
    const addName =()=>{
        if(name1 === '' || name2 === '')
            alert('다 채워');
        else{
            RName1(name1);
            RName2(name2);
        }
   }

   
    return(
        <div>
            <div>이름1</div>
            <div><input value={name1} onChange={inputChange1}/></div>
            <div>이름2</div>
            <div><input value={name2} onChange={inputChange2}/></div>
            <div><button onClick={addName}>추가</button></div>
        </div>
    );
};

export default InsertName;