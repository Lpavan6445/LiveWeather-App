const GMap=({city})=>{
  console.log(city)
  return (
  <div className="map" >
     <div >
      <div id="canvasfor-googlemap">
          <iframe id="maps" src={`https://www.google.com/maps/embed/v1/search?q=${city}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`} frameBorder="0" ></iframe>
      </div>
      <a className="googlemaps-html" href="https://www.embed-map.com" id="grabmap-authorization">https://www.embed-map.com</a>
    </div>
 </div>
)
}
export default GMap