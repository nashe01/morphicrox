
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Trash2, Edit, Save } from 'lucide-react';

interface GalleryProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image_url: string;
  featured: boolean;
  order_index: number;
}

interface ProjectsManagerProps {
  projects: GalleryProject[];
  onUpdateProject: (id: string, updates: any) => void;
  onAddProject: () => void;
  onDeleteProject: (id: string) => void;
  onProjectChange: (id: string, field: string, value: any) => void;
}

const ProjectsManager: React.FC<ProjectsManagerProps> = ({
  projects,
  onUpdateProject,
  onAddProject,
  onDeleteProject,
  onProjectChange
}) => {
  const [editingItem, setEditingItem] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Gallery Projects</h2>
        <Button onClick={onAddProject}>Add New Project</Button>
      </div>
      
      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent className="pt-6">
              {editingItem === project.id ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label>Title</Label>
                      <Input
                        value={project.title}
                        onChange={(e) => onProjectChange(project.id, 'title', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Category</Label>
                      <Input
                        value={project.category}
                        onChange={(e) => onProjectChange(project.id, 'category', e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Image URL</Label>
                    <Input
                      value={project.image_url}
                      onChange={(e) => onProjectChange(project.id, 'image_url', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={project.description}
                      onChange={(e) => onProjectChange(project.id, 'description', e.target.value)}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={project.featured}
                      onCheckedChange={(checked) => onProjectChange(project.id, 'featured', checked)}
                    />
                    <Label>Featured Project</Label>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => {
                        onUpdateProject(project.id, {
                          title: project.title,
                          category: project.category,
                          image_url: project.image_url,
                          description: project.description,
                          featured: project.featured
                        });
                        setEditingItem(null);
                      }}
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setEditingItem(null)}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-4">
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{project.title}</h3>
                      {project.featured && (
                        <span className="bg-brand text-white px-2 py-1 rounded-full text-xs">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{project.category}</p>
                    <p className="text-sm text-gray-700">{project.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setEditingItem(project.id)}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onDeleteProject(project.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsManager;
