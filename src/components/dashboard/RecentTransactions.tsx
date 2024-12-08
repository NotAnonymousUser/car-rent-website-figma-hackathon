export const RecentTransactions = () => {
  const transactions = [
    {
      id: 1,
      car: 'Nissan GT - R',
      type: 'Sport Car',
      date: '20 July',
      amount: 80.00,
      image: '/images/cars/nissan-gtr.png'
    },
    {
      id: 2,
      car: 'Koegnigsegg',
      type: 'Sport Car',
      date: '19 July',
      amount: 99.00,
      image: '/images/cars/koenigsegg.png'
    },
    {
      id: 3,
      car: 'Rolls - Royce',
      type: 'Sport Car',
      date: '18 July',
      amount: 96.00,
      image: '/images/cars/rolls-royce.png'
    },
    {
      id: 4,
      car: 'CR - V',
      type: 'SUV',
      date: '17 July',
      amount: 80.00,
      image: '/images/cars/cr-v.png'
    },
  ];

  return (
    <div className="bg-white rounded-[10px] p-6">
      <div className="space-y-6">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-[100px] h-[60px] bg-[#F6F7F9] rounded-[8px] flex items-center justify-center">
                <img 
                  src={transaction.image} 
                  alt={transaction.car} 
                  className="w-[80px] h-[45px] object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A202C]">{transaction.car}</h3>
                <p className="text-sm text-[#90A3BF]">{transaction.type}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-[#1A202C]">${transaction.amount.toFixed(2)}</p>
              <p className="text-sm text-[#90A3BF]">{transaction.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
