export interface ChatMessage {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  memoryId?: string;
  golemExplorerUrl?: string; // Legacy field for backward compatibility
  entityUrl?: string; // Arkiv entity URL
  transactionUrl?: string; // Arkiv transaction URL
}
