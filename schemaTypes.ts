export interface ProjectSchema {
  name: string;
  description: string;
  documents: number[];
};

export interface DocumentSchema {
  name: string;
  description: string;
}