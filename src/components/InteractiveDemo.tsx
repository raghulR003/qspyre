'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback } from 'react';

interface BenchmarkStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: 'pending' | 'active' | 'completed';
  details?: string;
}

interface ModelResult {
  name: string;
  accuracy: number;
  latency: number;
  throughput: number;
  cost: number;
  color: string;
}

export default function InteractiveDemo() {
  const [isRunning, setIsRunning] = useState(false);
  const [selectedDataset, setSelectedDataset] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedMetrics, setSelectedMetrics] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [animatedResults, setAnimatedResults] = useState<ModelResult[]>([]);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const datasets = [
    { id: 'imdb', name: 'IMDB Movie Reviews', type: 'Text Classification', size: '50K samples' },
    { id: 'cifar10', name: 'CIFAR-10', type: 'Image Classification', size: '60K images' },
    { id: 'squad', name: 'SQuAD 2.0', type: 'Question Answering', size: '150K questions' },
    { id: 'coco', name: 'MS COCO', type: 'Object Detection', size: '330K images' }
  ];

  const models = [
    { id: 'gpt4', name: 'GPT-4', type: 'Large Language Model', params: '1.7T' },
    { id: 'claude', name: 'Claude 3', type: 'Large Language Model', params: '400B' },
    { id: 'resnet', name: 'ResNet-50', type: 'Vision Model', params: '25M' },
    { id: 'bert', name: 'BERT-Base', type: 'Language Model', params: '110M' }
  ];

  const metrics = [
    { id: 'accuracy', name: 'Accuracy', description: 'Overall correctness' },
    { id: 'latency', name: 'Latency', description: 'Response time per request' },
    { id: 'throughput', name: 'Throughput', description: 'Requests per second' },
    { id: 'cost', name: 'Cost Efficiency', description: 'Cost per 1K requests' }
  ];

  const initialSteps: BenchmarkStep[] = [
    {
      id: 'setup',
      title: 'Setup Dataset',
      description: 'Choose and configure your dataset',
      icon: '📊',
      status: 'pending'
    },
    {
      id: 'model',
      title: 'Select Model',
      description: 'Pick the AI model to evaluate',
      icon: '🤖',
      status: 'pending'
    },
    {
      id: 'metrics',
      title: 'Configure Metrics',
      description: 'Define evaluation criteria',
      icon: '📏',
      status: 'pending'
    },
    {
      id: 'run',
      title: 'Run Benchmark',
      description: 'Execute the evaluation process',
      icon: '🚀',
      status: 'pending'
    },
    {
      id: 'analyze',
      title: 'Analyze Results',
      description: 'Review performance data',
      icon: '📈',
      status: 'pending'
    }
  ];

  const [steps, setSteps] = useState<BenchmarkStep[]>(initialSteps);

  const mockResults: ModelResult[] = [
    { name: 'GPT-4', accuracy: 94.2, latency: 120, throughput: 450, cost: 0.03, color: 'bg-blue-500' },
    { name: 'Claude 3', accuracy: 92.8, latency: 95, throughput: 520, cost: 0.025, color: 'bg-green-500' },
    { name: 'BERT-Base', accuracy: 89.5, latency: 45, throughput: 890, cost: 0.008, color: 'bg-purple-500' },
    { name: 'ResNet-50', accuracy: 91.3, latency: 35, throughput: 1200, cost: 0.005, color: 'bg-orange-500' }
  ];

  const handleDragStart = useCallback((e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', itemId);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    const draggedItemId = e.dataTransfer.getData('text/plain') || draggedItem;
    
    if (draggedItemId && draggedItemId !== targetId) {
      const draggedIndex = steps.findIndex((step: BenchmarkStep) => step.id === draggedItemId);
      const targetIndex = steps.findIndex((step: BenchmarkStep) => step.id === targetId);
      
      if (draggedIndex !== -1 && targetIndex !== -1) {
        const newSteps = [...steps];
        const [draggedStep] = newSteps.splice(draggedIndex, 1);
        newSteps.splice(targetIndex, 0, draggedStep);
        setSteps(newSteps);
      }
    }
    setDraggedItem(null);
  }, [draggedItem, steps]);
  const runBenchmark = useCallback(async () => {
    if (!selectedDataset || !selectedModel || selectedMetrics.length === 0) return;
    
    setIsRunning(true);
    setShowResults(false);
    
    // Reset steps
    const resetSteps = steps.map((step: BenchmarkStep) => ({ ...step, status: 'pending' as const }));
    setSteps(resetSteps);
    
    // Simulate step-by-step execution
    for (let i = 0; i < steps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSteps(prev => prev.map((step: BenchmarkStep, index: number) => ({
        ...step,
        status: index === i ? 'active' : index < i ? 'completed' : 'pending'
      })));
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSteps(prev => prev.map((step: BenchmarkStep, index: number) => ({
        ...step,
        status: index <= i ? 'completed' : 'pending'
      })));
    }
    
    // Show results with animation
    setShowResults(true);
    setAnimatedResults([]);
    
    for (let i = 0; i < mockResults.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 300));
      setAnimatedResults(prev => [...prev, mockResults[i]]);
    }
    
    setIsRunning(false);  }, [selectedDataset, selectedModel, selectedMetrics, steps, mockResults]);

  const resetDemo = () => {
    setIsRunning(false);
    setSelectedDataset('');
    setSelectedModel('');
    setSelectedMetrics([]);
    setShowResults(false);
    setAnimatedResults([]);
    setSteps(initialSteps);
  };

  const toggleMetric = (metricId: string) => {
    setSelectedMetrics(prev =>
      prev.includes(metricId)
        ? prev.filter(id => id !== metricId)
        : [...prev, metricId]
    );
  };

  const canRun = selectedDataset && selectedModel && selectedMetrics.length > 0 && !isRunning;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Interactive Benchmark Demo
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Experience QSpyre&rsquo;s powerful benchmarking capabilities. Configure your evaluation, 
          run tests, and analyze results in real-time.
        </p>
      </div>

      {/* Configuration Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Dataset Selection */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Select Dataset
          </h3>
          <div className="space-y-3">
            {datasets.map((dataset) => (
              <motion.div
                key={dataset.id}
                whileHover={{ scale: 1.02 }}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedDataset === dataset.id
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
                onClick={() => setSelectedDataset(dataset.id)}
              >
                <div className="font-medium text-gray-900 dark:text-white">
                  {dataset.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {dataset.type} • {dataset.size}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Model Selection */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Select Model
          </h3>
          <div className="space-y-3">
            {models.map((model) => (
              <motion.div
                key={model.id}
                whileHover={{ scale: 1.02 }}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedModel === model.id
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-400'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
                onClick={() => setSelectedModel(model.id)}
              >
                <div className="font-medium text-gray-900 dark:text-white">
                  {model.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {model.type} • {model.params}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics Selection */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Select Metrics
          </h3>
          <div className="space-y-3">
            {metrics.map((metric) => (
              <motion.div
                key={metric.id}
                whileHover={{ scale: 1.02 }}
                className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedMetrics.includes(metric.id)
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20 dark:border-purple-400'
                    : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
                }`}
                onClick={() => toggleMetric(metric.id)}
              >
                <div className="font-medium text-gray-900 dark:text-white">
                  {metric.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow Steps */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Benchmark Workflow
        </h3>        <div className="flex flex-wrap gap-4">
          {steps.map((step) => (
            <div
              key={step.id}
              draggable
              onDragStart={(e: React.DragEvent<HTMLDivElement>) => handleDragStart(e, step.id)}
              onDragOver={handleDragOver}
              onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e, step.id)}
              className={`p-4 rounded-lg border-2 cursor-move transition-all hover:scale-105 ${
                step.status === 'completed'
                  ? 'border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-400'
                  : step.status === 'active'
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400'
                  : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{step.icon}</span>
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {step.title}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={runBenchmark}
          disabled={!canRun}
          className={`px-8 py-3 rounded-lg font-semibold transition-all ${
            canRun
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          }`}
        >
          {isRunning ? 'Running Benchmark...' : 'Run Benchmark'}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={resetDemo}
          className="px-6 py-3 rounded-lg font-semibold bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
        >
          Reset
        </motion.button>
      </div>

      {/* Results Section */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Benchmark Results
            </h3>
            <div className="grid gap-4">
              {animatedResults.map((result, index) => (
                <motion.div
                  key={result.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded ${result.color}`}></div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {result.name}
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 dark:text-gray-400">Accuracy</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {result.accuracy}%
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 dark:text-gray-400">Latency</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {result.latency}ms
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 dark:text-gray-400">Throughput</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {result.throughput}/s
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 dark:text-gray-400">Cost</div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        ${result.cost}/1K
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
