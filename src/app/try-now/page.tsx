import InteractiveDemo from "@/components/InteractiveDemo";

export const metadata = {
  title: "Try QSpyre - Interactive AI/ML Benchmark Demo",
  description: "Experience QSpyre's powerful benchmark creation and evaluation tools with our interactive demo. Test different AI/ML models and see real-time results.",
};

export default function TryNowPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Try QSpyre Interactive Demo
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience QSpyre&rsquo;s benchmark creation and evaluation capabilities firsthand. 
              This interactive demo shows how you can evaluate AI/ML models across different domains.
            </p>
          </div>

          {/* Interactive Demo Section */}
          <section className="mb-12">
            <InteractiveDemo />
          </section>

          {/* Additional Demo Features */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                🚀 Quick Start Benchmarks
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pre-configured benchmarks for popular use cases that you can run immediately.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <span className="text-blue-800 dark:text-blue-200 font-medium">LLM Text Generation</span>
                  <span className="text-blue-600 dark:text-blue-400 text-sm">Ready to run</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-green-800 dark:text-green-200 font-medium">Image Classification</span>
                  <span className="text-green-600 dark:text-green-400 text-sm">Ready to run</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <span className="text-purple-800 dark:text-purple-200 font-medium">Sentiment Analysis</span>
                  <span className="text-purple-600 dark:text-purple-400 text-sm">Ready to run</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                📊 Real-time Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Watch your model&rsquo;s performance metrics update in real-time as benchmarks execute.
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Accuracy Score</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                    <span className="text-green-600 dark:text-green-400 font-medium">85%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Response Time</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                    </div>
                    <span className="text-blue-600 dark:text-blue-400 font-medium">120ms</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Resource Usage</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                    <span className="text-yellow-600 dark:text-yellow-400 font-medium">45%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Demo Features Grid */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
                Custom Metrics
              </h3>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Define your own evaluation metrics or use our comprehensive library of standard benchmarks.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-700">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">
                Fast Execution
              </h3>
              <p className="text-green-700 dark:text-green-300 text-sm">
                Optimized evaluation pipeline that scales from single tests to large benchmark suites.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-2">
                Detailed Reports
              </h3>
              <p className="text-purple-700 dark:text-purple-300 text-sm">
                Comprehensive analysis with visualizations, error breakdowns, and improvement suggestions.
              </p>
            </div>
          </section>

          {/* Getting Started CTA */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Start Benchmarking?
            </h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of researchers and developers using QSpyre to evaluate and improve their AI/ML models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Sign Up for Free
              </button>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500">
                View Documentation
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
