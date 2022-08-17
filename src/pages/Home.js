import ItemListContainer from '../components/ItemListContainer/ItemContainer'

const Home = () => {
    return(
        <div className="container" >
            <section className='main-container'>
            <ItemListContainer section="Todos nuestros productos"/>
            </section>
        </div>
    )
}

export default Home