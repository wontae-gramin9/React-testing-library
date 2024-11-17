export default function Application() {
  return (
    <form> 
      <div>
        <label htmlFor="name">Name</label>
        <input type='text' id='name'/>
      </div>
      <div>
        <label htmlFor="job-location">Job Location</label>
        <select id='job-location'>
          <option value=''>Select a country</option>
          <option value='US'>USA</option>
          <option value='GB'>Great Britain</option>
          <option value='CA'>Canana</option>
          <option value='IN'>India</option>
          <option value='AU'>Austrailia</option>
        </select>
      </div>
      <div>
        <label>
          <input type='checkbox' id='terms'/>
          I agree to terms and conditions</label>
      </div>
      <button>Submit</button>
    </form>
  )
}
