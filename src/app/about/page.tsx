export const metadata = {
  title: "About QSpyre - AI/ML Benchmark Platform",
  description: "Learn about QSpyre's mission to empower researchers, developers, and organizations to quantitatively evaluate any AI/ML model from a unified perspective.",
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8">About QSpyre</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              <strong>QSpyre</strong> (ˈkju-spī(ə)r) is the one-stop platform for <strong>crafting, sharing, and evaluating AI/ML benchmarks</strong>—from large language models (LLMs) and vision models to multi-modal systems and fully custom pipelines.
            </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our name combines <strong>&ldquo;Q&rdquo;</strong> (Quality, Quantitative metrics, Query) with <strong>&ldquo;Spyre&rdquo;</strong> (a vantage point, akin to a spire), reflecting our mission to provide a <strong>bird&rsquo;s-eye view on model performance</strong>.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Why Benchmarks Matter</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              As AI/ML models proliferate—open-source or closed-source, text or vision, general or domain-specific—it becomes crucial to measure <strong>performance, fairness, and reliability</strong> in a consistent, reproducible way. Benchmarks:
            </p>            <ul className="space-y-2 text-gray-700 dark:text-gray-300 mb-6">              <li><strong>Quantify Progress</strong> – Instead of anecdotal claims (&ldquo;this model feels better&rdquo;), you use data to show &ldquo;Model A outperforms Model B on task X by 10%.&rdquo;</li>
              <li><strong>Enable Fair Comparison</strong> – A single benchmark ensures apples-to-apples evaluation. Without it, you risk &ldquo;metric mismatch&rdquo; (comparing F1 on one dataset vs. BLEU on another).</li>
              <li><strong>Drive Innovation</strong> – Public leaderboards and shared benchmarks have historically accelerated model advances (e.g., ImageNet, GLUE, SuperGLUE).</li>
              <li><strong>Surface Limitations</strong> – Benchmarks highlight edge cases (adversarial examples, bias measurement, multi-modal alignment) that prompt deeper research and debugging.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">Our Mission</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              QSpyre&rsquo;s mission is to democratize AI/ML evaluation by providing researchers, developers, and organizations with the tools they need to create meaningful benchmarks and gain quantitative insights into model performance. We believe that better evaluation leads to better AI systems.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-8 border dark:border-blue-700">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-200 mb-2">Ready to get started?</h3>
              <p className="text-blue-800 dark:text-blue-300">
                Join our community of researchers and developers who are advancing the state of AI/ML evaluation.
              </p>
            </div>
          </div>        </div>
      </div>
    </div>
  );
}
