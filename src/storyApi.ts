import Story from './story.ts'

export class StoryAPI{

    private static storiesKey = 'stories';

    public static getAllStories(): Story[] {
        const storiesData = localStorage.getItem(this.storiesKey);
        if(storiesData){
            return JSON.parse(storiesData);
        }
        return [];
    }

    public static createStory(story: Story): void {
        const stories = this.getAllStories();
        stories.push(story);
        localStorage.setItem(this.storiesKey, JSON.stringify(stories));
    }

    //update, delete, filtrowanie to do
}