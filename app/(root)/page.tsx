
import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    
    const logIn = { firstName: 'Matheus', lastName: 'Serafim', email: 'contact@email.com'};

    return (
        <section className="home">
           <div className="home-content">
                <header className="home-header">
                    <HeaderBox type="Bem Vindo" 
                        title="Bem Vindo"
                        user={logIn?.firstName || 'Aleatório'}
                        subtext="Gerencie sua conta e informações de maneira fácil"
                    />

                    <TotalBalanceBox 
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={10921}
                    />
                </header>
            </div> 

            <RightSideBar
              user={logIn}
              transactions={[]}
              banks={[ {}, {}]}
            />
        </section>
    )
}

export default Home