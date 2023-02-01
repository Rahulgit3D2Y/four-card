import './App.css';
import Card from './component/Card';
const carddetail=[
  {name:'Supervisor',desc:'Monitors activity to identify project roadblocks',img:'./images/icon-supervisor.svg',alt:"supervisor"},
  {name:'Team Builder',desc:'  Scans our talent network to create the optimal team for your project',img:"./images/icon-team-builder.svg",alt:"team-builder"},
  {name:'Karma',desc:'Regularly evaluates our talent to ensure quality',img:"./images/icon-karma.svg",alt:"karma"},
  {name:'Calculator',desc:'  Uses data from past projects to provide better delivery estimates',img:"./images/icon-calculator.svg",alt:"calculator"}];
function App() {
  return (
      <body className='body'>
        <main className='main'>
          <div className="top">
            <h2 className='h1'>
            <span className='span'>Reliable, efficient delivery </span><br/>
            Powered by Technology
            </h2>
            <p>
            Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
            </p>
          </div>
          <div className="card-container">
            {
            carddetail.map((item=>{
              return  <Card name={item.name} desc={item.desc} img={item.img} />
            }))
            }
          </div>
        </main>     
  
  </body>     
  );
}

export default App;
