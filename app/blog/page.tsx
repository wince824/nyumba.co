import CustomerReviews from '@/components/CustomerReviews';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Customer Reviews</h1>
        <CustomerReviews />
      </div>
    </div>
  );
};

export default BlogPage;
