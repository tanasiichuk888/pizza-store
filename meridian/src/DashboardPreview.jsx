const accounts = [
  { name: 'Northwind Labs', arr: '$420k', health: 92, trend: '+4', tone: 'good' },
  { name: 'Helix Freight', arr: '$310k', health: 71, trend: '−2', tone: 'warn' },
  { name: 'Cobalt Retail', arr: '$265k', health: 58, trend: '−8', tone: 'risk' },
  { name: 'Orchid Media', arr: '$188k', health: 84, trend: '+6', tone: 'good' },
]

const bars = [42, 58, 51, 67, 73, 69, 81, 76, 88, 84, 91, 96]

export default function DashboardPreview() {
  return (
    <div className="board" role="img" aria-label="Meridian account health dashboard preview">
      <aside className="board__rail">
        <div className="board__logo">
          <span className="brand__mark brand__mark--sm" />
          Meridian
        </div>
        <ul>
          <li className="is-active">Account board</li>
          <li>Renewals</li>
          <li>Expansion</li>
          <li>Signals</li>
        </ul>
        <div className="board__rail-foot">Q2 operating view</div>
      </aside>

      <div className="board__main">
        <header className="board__header">
          <div>
            <p className="board__eyebrow">Revenue operations</p>
            <h3>Account health</h3>
          </div>
          <div className="board__pills">
            <span>Last 30 days</span>
            <span className="is-accent">12 at risk</span>
          </div>
        </header>

        <div className="board__metrics">
          <article>
            <p>Renewal forecast</p>
            <strong>$4.8M</strong>
            <span className="up">+6.2% vs plan</span>
          </article>
          <article>
            <p>Expansion ready</p>
            <strong>37</strong>
            <span className="up">accounts scoring &gt; 80</span>
          </article>
          <article>
            <p>Churn watch</p>
            <strong>12</strong>
            <span className="down">needs owner this week</span>
          </article>
        </div>

        <div className="board__split">
          <div className="board__chart">
            <div className="board__chart-head">
              <h4>Pipeline clarity</h4>
              <span>Committed → closed</span>
            </div>
            <div className="chart-bars" aria-hidden="true">
              {bars.map((value, index) => (
                <span
                  key={index}
                  style={{ '--h': `${value}%`, '--d': `${index * 40}ms` }}
                />
              ))}
            </div>
          </div>

          <div className="board__list">
            <div className="board__chart-head">
              <h4>Priority accounts</h4>
              <span>Health score</span>
            </div>
            <ul>
              {accounts.map((account) => (
                <li key={account.name}>
                  <div>
                    <strong>{account.name}</strong>
                    <span>{account.arr} ARR</span>
                  </div>
                  <div className={`score score--${account.tone}`}>
                    <em>{account.health}</em>
                    <small>{account.trend}</small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
