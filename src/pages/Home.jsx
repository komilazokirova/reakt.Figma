
import Banner from '../components/Banner'
import Sidebar from '../components/Sidebar';
import FlashSales from '../components/FlashSales';

function Home() {
  return (
    <div >
      <div className='flex gap-10 items-start'>
      <Sidebar/>
      <Banner />
      
    </div>
    <FlashSales/> 
    </div>
  )
}

export default Home;