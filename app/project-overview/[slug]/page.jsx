import ProjectOverviewPage from '../../components/Home/ProjectOverview';

export default async function Page({ params }) {
  const resolvedParams = await params;
  console.log('Page component rendered with params:', resolvedParams); // Debug log
  console.log('Slug from params:', resolvedParams?.slug); // Debug log
  return <ProjectOverviewPage params={resolvedParams} />;
}
