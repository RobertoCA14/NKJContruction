const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Construction</h3>
            <p>
              We provide quality construction services for residential and
              commercial projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Renovations</h3>
            <p>
              Transform your spaces with our renovation services, tailored to
              your needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Project Management</h3>
            <p>
              Our experts will oversee your projects from start to finish,
              ensuring timely completion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
