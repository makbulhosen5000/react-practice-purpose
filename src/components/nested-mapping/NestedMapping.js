

import './NestedMapping.css'



const Users=[
  {
      name:"mh akash",
      university : "Atish Depankar University Of Science And Technology",
      studentInfo :[ {id:"182-0065-201"}, {section:"section-2"} ]
  },
  {
      name:"ria",
      university : "Atish Depankar University Of Science And Technology",
      studentInfo :[ {id:"182-0065-202"}, {section:"section-2"} ]
  },
  {
      name:"kamal",
      university : "Atish Depankar University Of Science And Technology",
      studentInfo :[ {id:"182-0065-203"}, {section:"section-2"} ]
  }
];

function NestedMapping() {
  return (
 
    <div className='container'>

      <div className="cards">
        
            {
              Users.map((user,index)=>{
                const {name,university} = user;
                return(
                  <div className='card card-one' key={index}>
                      <h2 className="card-title">Name: {name} </h2>
                      <p className="description">University: {university} </p>

                      {
                        user.studentInfo.map((info,index)=>(
                          <div key={index}>
                              <p>Id:{info.id}</p>
                              <p>Section:{info.section}</p>
                          </div>
                        ))
                      }
                      
                  </div>
                );
              
              
              })
            }         
      </div>
    </div>

         
     

  )
}

export default NestedMapping