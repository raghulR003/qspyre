import Link from "next/link";

export const metadata = {
  title: "Getting Started - QSpyre AI/ML Benchmark Platform",
  description: "Learn how to get started with QSpyre for AI/ML benchmark creation and evaluation. Step-by-step guide for researchers and developers.",
};

export default function GettingStartedPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">Getting Started with QSpyre</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Ready to start evaluating your AI/ML models? This guide will walk you through the basics of using QSpyre to create and run benchmarks.
            </p>            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-300 p-6 mb-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400 dark:text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700 dark:text-yellow-200">
                    <strong>Note:</strong> QSpyre is currently in development. This page shows the planned user experience and workflow.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Quick Start</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 p-6 rounded-lg">
                <div className="text-blue-600 dark:text-blue-400 font-semibold text-lg mb-2">1. Sign Up</div>
                <p className="text-blue-800 dark:text-blue-200 text-sm">Create your free QSpyre account to access the platform and start creating benchmarks.</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 p-6 rounded-lg">
                <div className="text-green-600 dark:text-green-400 font-semibold text-lg mb-2">2. Choose Your Domain</div>
                <p className="text-green-800 dark:text-green-200 text-sm">Select from LLMs, vision models, multi-modal systems, or create custom evaluation pipelines.</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 p-6 rounded-lg">
                <div className="text-purple-600 dark:text-purple-400 font-semibold text-lg mb-2">3. Run & Analyze</div>
                <p className="text-purple-800 dark:text-purple-200 text-sm">Execute your benchmarks and get detailed analytics and insights about model performance.</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Core Concepts</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">Benchmarks</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              A benchmark in QSpyre is a standardized test that evaluates specific aspects of your AI/ML model. 
              Each benchmark includes:
            </p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 mb-4">
              <li>• <strong>Dataset:</strong> The input data for evaluation</li>
              <li>• <strong>Metrics:</strong> How performance is measured</li>
              <li>• <strong>Evaluation Protocol:</strong> The process for running the test</li>
              <li>• <strong>Baseline Results:</strong> Reference performance levels</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">Evaluation Runs</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              When you run a benchmark against your model, QSpyre creates an evaluation run that tracks:
            </p>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300 mb-4">
              <li>• Model configurations and hyperparameters</li>
              <li>• Performance metrics and scores</li>
              <li>• Runtime information and resource usage</li>
              <li>• Detailed results and error analysis</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Example Workflows</h2>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">Evaluating an LLM</h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
              <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>1. Select &ldquo;LLM Evaluation&rdquo; from the dashboard</li>
                <li>2. Choose benchmarks (e.g., reasoning, factuality, safety)</li>
                <li>3. Connect your model API or upload model files</li>
                <li>4. Configure evaluation parameters</li>
                <li>5. Run the evaluation and review results</li>
              </ol>
            </div>            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-3">Creating a Custom Benchmark</h3>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
              <ol className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>1. Click &ldquo;Create Benchmark&rdquo; and select your domain</li>
                <li>2. Upload your dataset and define the task</li>
                <li>3. Specify evaluation metrics and success criteria</li>
                <li>4. Test with a baseline model</li>
                <li>5. Publish to the community or keep private</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Best Practices</h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Start with Existing Benchmarks</h4>
                <p>Use community-validated benchmarks before creating custom ones to establish baseline performance.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Document Your Setup</h4>
                <p>Record model configurations, data preprocessing steps, and evaluation parameters for reproducibility.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Compare Multiple Models</h4>
                <p>Evaluate several models on the same benchmark to understand relative performance and identify strengths.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Monitor for Bias</h4>
                <p>Use diverse evaluation datasets and fairness metrics to ensure your models perform well across different groups.</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-8 border dark:border-blue-700">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">Ready to start?</h3>
              <p className="text-blue-800 dark:text-blue-300 mb-4">
                Join our community and start evaluating your AI/ML models today.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/try-now"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Try QSpyre Now
                </Link>
                <Link
                  href="/community"
                  className="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Join Community
                </Link>
              </div>
            </div></div>
        </div>
      </div>
    </div>
  );
}
