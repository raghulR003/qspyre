import Link from "next/link";
import AnimatedHero from "@/components/AnimatedHero";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <AnimatedHero />

      {/* Features Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Choose QSpyre?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              From rapid prototyping to enterprise-scale evaluation, QSpyre provides the tools you need 
              to benchmark any AI/ML model with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Feature 1 */}
            <div className="text-center p-4 sm:p-6">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="h-7 w-7 sm:h-8 sm:w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Fast & Intuitive</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Design and deploy benchmarks in minutes, not days. Our intuitive interface lets you focus 
                on what matters—evaluating your models.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-4 sm:p-6">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="h-7 w-7 sm:h-8 sm:w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Any AI/ML Domain</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                From LLMs and vision models to multi-modal systems and custom pipelines—QSpyre supports 
                evaluation across any AI/ML domain.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-4 sm:p-6">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <svg className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Open & Collaborative</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                Built on open-source foundations with a thriving community. Share benchmarks, collaborate 
                on evaluations, and advance AI research together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 sm:py-16 lg:py-20 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              How QSpyre Works
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Three simple steps to start evaluating your AI/ML models with quantitative precision.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="bg-blue-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-4 text-lg sm:text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Define Your Benchmark</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Create custom evaluation tasks with your datasets, or choose from our community-curated 
                    benchmark library covering diverse AI/ML domains.
                  </p>
                </div>
              </div>
              {/* Connector */}
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg className="h-8 w-8 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="bg-green-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-4 text-lg sm:text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Run Evaluations</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Execute your benchmarks across multiple models simultaneously. Our platform handles 
                    the complexity while you focus on insights.
                  </p>
                </div>
              </div>
              {/* Connector */}
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <svg className="h-8 w-8 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center">
                  <div className="bg-purple-600 text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-4 text-lg sm:text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Analyze Results</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    Visualize performance metrics, compare models side-by-side, and generate comprehensive 
                    reports to drive data-informed decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Experience QSpyre in Action
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Try our interactive demo to see how QSpyre makes AI/ML model evaluation simple, 
            comprehensive, and collaborative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/try-now"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              🚀 Try Interactive Demo
            </Link>
            <Link
              href="/getting-started"
              className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-lg font-semibold text-lg transition-all"
            >
              📚 Getting Started Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Built for Every AI/ML Use Case
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
              Whether you&rsquo;re a researcher, developer, or enterprise team, QSpyre adapts to your evaluation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* LLM Evaluation */}
            <div className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">LLM Evaluation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Test language models on reasoning, factuality, safety, and domain-specific tasks with 
                comprehensive metrics and human evaluation workflows.
              </p>
            </div>

            {/* Vision Models */}
            <div className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="mb-4">
                <div className="bg-green-100 dark:bg-green-900 rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Vision Models</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Benchmark computer vision models on classification, detection, segmentation, and 
                generation tasks across diverse datasets and conditions.
              </p>
            </div>

            {/* Multi-Modal */}
            <div className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="mb-4">
                <div className="bg-purple-100 dark:bg-purple-900 rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Multi-Modal Systems</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Evaluate models that process multiple modalities—text, images, audio, and video—with 
                cross-modal understanding and generation benchmarks.
              </p>
            </div>

            {/* Custom Pipelines */}
            <div className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="mb-4">
                <div className="bg-orange-100 dark:bg-orange-900 rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600 dark:text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Custom Pipelines</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Design specialized evaluation workflows for unique AI/ML systems, from reinforcement 
                learning agents to custom data processing pipelines.
              </p>
            </div>

            {/* Research Teams */}
            <div className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="mb-4">
                <div className="bg-red-100 dark:bg-red-900 rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Research Validation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Ensure reproducible research with standardized benchmarks, version control, and 
                collaborative evaluation workflows for academic and industry research.
              </p>
            </div>

            {/* Enterprise */}
            <div className="bg-white dark:bg-gray-900 p-5 sm:p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="mb-4">
                <div className="bg-indigo-100 dark:bg-indigo-900 rounded-lg w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                  <svg className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Enterprise Deployment</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                Scale model evaluation across your organization with private benchmarks, advanced 
                analytics, and enterprise-grade security and compliance features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Call-to-Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Join the QSpyre Community
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 dark:text-blue-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Connect with researchers, developers, and AI enthusiasts who are advancing the state of 
            model evaluation. Share benchmarks, collaborate on research, and drive innovation together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              href="/try-now"
              className="bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Start Evaluating Today
              <svg className="ml-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/community"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors inline-flex items-center justify-center"
            >
              Join Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
