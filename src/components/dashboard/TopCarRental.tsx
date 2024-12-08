export const TopCarRental = () => {
  const carStats = [
    { type: 'Sport Car', count: 17439, color: '#3563E9' },
    { type: 'SUV', count: 9478, color: '#54A6FF' },
    { type: 'Coupe', count: 18197, color: '#70CF97' },
    { type: 'Hatchback', count: 12510, color: '#FF7E86' },
    { type: 'MPV', count: 14406, color: '#C0CCDA' },
  ];

  const total = 72030;

  return (
    <div className="bg-white rounded-[10px] p-6">
      <div className="relative">
        {/* Donut Chart */}
        <div className="w-[200px] h-[200px] mx-auto relative mb-6">
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-[32px] font-bold text-[#1A202C]">{total.toLocaleString()}</span>
            <span className="text-sm text-[#90A3BF]">Rental Car</span>
          </div>
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#F6F7F9"
              strokeWidth="20"
            />
            {carStats.map((stat, index) => {
              const percentage = (stat.count / total) * 100;
              const circumference = 2 * Math.PI * 80;
              const offset = circumference - (percentage / 100) * circumference;
              const prevOffset = index > 0
                ? carStats
                    .slice(0, index)
                    .reduce((acc, curr) => acc + (curr.count / total) * circumference, 0)
                : 0;

              return (
                <circle
                  key={stat.type}
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke={stat.color}
                  strokeWidth="20"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  style={{ transform: `rotate(${(prevOffset / circumference) * 360}deg)` }}
                />
              );
            })}
          </svg>
        </div>

        {/* Stats List */}
        <div className="space-y-4">
          {carStats.map((stat) => (
            <div key={stat.type} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: stat.color }}></div>
                <span className="text-sm text-[#90A3BF]">{stat.type}</span>
              </div>
              <span className="font-semibold text-[#1A202C]">{stat.count.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
