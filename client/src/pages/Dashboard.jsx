import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  // Static Data matching PDF image [cite: 20, 25, 30]
  const users = [
    { id: 1, name: 'Michael Holz', date: '04/10/2013', role: 'Admin', status: 'Active', color: 'text-green-500' },
    { id: 2, name: 'Paula Wilson', date: '05/08/2014', role: 'Publisher', status: 'Active', color: 'text-green-500' },
    { id: 3, name: 'Antonio Moreno', date: '11/05/2015', role: 'Publisher', status: 'Suspended', color: 'text-red-500' },
    { id: 4, name: 'Mary Saveley', date: '06/09/2016', role: 'Reviewer', status: 'Active', color: 'text-green-500' },
    { id: 5, name: 'Martin Sommer', date: '12/08/2017', role: 'Moderator', status: 'Inactive', color: 'text-yellow-500' },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-white p-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">User Management</h2>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="border-b text-gray-600 text-left">
              <th className="p-3">#</th>
              <th className="p-3">Name</th>
              <th className="p-3">Date Created</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{user.id}</td>
                <td className="p-3 font-medium flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300"></div> {user.name}
                </td>
                <td className="p-3">{user.date}</td>
                <td className="p-3">{user.role}</td>
                <td className={`p-3 font-bold ${user.color}`}>• {user.status}</td>
                <td className="p-3 flex gap-2">
                  <button className="text-blue-500">⚙️</button>
                  <button className="text-red-500">❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;