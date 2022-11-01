
import './app-filter.css';

const AppFilter = () => {
    return (
     <div className="button-group">
         <button 
         className="btn btn-light"
         type="button">
             Wszyscy niewolnicy
         </button>

         <button 
         className="btn btn-outline-light"
         type="button">
             Na podwyszkę
         </button>

         <button 
         className="btn btn-outline-light"
         type="button">
             Mają tyle ryżu by się nażreć
         </button>
     </div>   
    );
};

export default AppFilter;