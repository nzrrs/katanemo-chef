import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
export default function ClaudeRecipe(props){
    return(
        <section className='suggested-recipe-container'>
          <h2>Chef Katanemo Recommends:</h2>
          <ReactMarkdown children={props.recipe} remarkPlugins={[remarkGfm]}/> 

        </section>
    )
}