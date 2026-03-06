import React from 'react';
import { ArrowUpRight, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DashboardCardItem } from '../types';

interface Props {
  item: DashboardCardItem;
}

const accentClasses: Record<DashboardCardItem['accent'], string> = {
  blue: 'from-sky-500 via-blue-500 to-indigo-600 text-sky-50 ring-sky-200/60',
  green: 'from-emerald-500 via-teal-500 to-cyan-600 text-emerald-50 ring-emerald-200/60',
  amber: 'from-amber-400 via-orange-400 to-rose-500 text-amber-50 ring-amber-200/60',
  slate: 'from-slate-700 via-slate-800 to-slate-900 text-slate-50 ring-slate-300/40',
};

const iconAccentClasses: Record<DashboardCardItem['accent'], string> = {
  blue: 'bg-sky-100 text-sky-700',
  green: 'bg-emerald-100 text-emerald-700',
  amber: 'bg-amber-100 text-amber-700',
  slate: 'bg-slate-100 text-slate-700',
};

function CardBody({ item }: Props) {
  const Icon = item.icon;

  return (
    <div className="group h-full rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-[0_24px_60px_-28px_rgba(15,23,42,0.3)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(14,116,144,0.45)]">
      <div className={`inline-flex rounded-2xl p-3 ${iconAccentClasses[item.accent]}`}>
        <Icon size={24} />
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
        <span>{item.kicker}</span>
        {item.badge && (
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] tracking-[0.18em] text-slate-500">
            {item.badge}
          </span>
        )}
      </div>
      <h3 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
      <div className={`mt-6 rounded-2xl bg-gradient-to-br p-4 ring-1 ${accentClasses[item.accent]}`}>
        <p className="text-sm font-medium leading-6">{item.highlight}</p>
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-slate-900">
        <span>{item.ctaLabel}</span>
        {item.external ? <ArrowUpRight size={16} /> : <MoveRight size={16} />}
      </div>
    </div>
  );
}

export const DashboardCard: React.FC<Props> = ({ item }) => {
  if (item.external) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardBody item={item} />
      </a>
    );
  }

  return (
    <Link to={item.href} className="block h-full">
      <CardBody item={item} />
    </Link>
  );
};
