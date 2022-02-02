import Charts from '../../../../shared/components/charts/charts';
import ColoredStatCard from '../../../../shared/components/coloredstat/coloredstats';
import './dashboard.scss'
import LatestRequest from './latestrequest';
import Stats from './stats';

const Dashboard = () => {
  return (
    <main>

      <div className='row'>
        <div className='col-lg-9 lhs'>
          <div className='wrapper'>
            <div className='filter-wrapper'>
              <div className='filter'>
                <button className='filter-button active'>Today</button>
                <button className='filter-button'>Last 7 Days</button>
                <button className='filter-button'>Last 30 Days</button>
                <button className='filter-button'>All Time</button>
              </div>
            </div>
            <div className='chart-wrapper'>

              <Charts />
            </div>
          </div>
        </div>
        <div className='col-lg-3 rhs'>
          <div className='wrapper'>
            <Stats />
          </div>
        </div>
      </div>
      <div>
        <LatestRequest />
      </div>
    </main>
  );
}

export default Dashboard;