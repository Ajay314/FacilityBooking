export default function Header({ showCreateBooking, onCreateBooking }) {
    return (
      <div className="mb-4">
        {showCreateBooking && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onCreateBooking}
          >
            Create Booking
          </button>
        )}
      </div>
    );
  }