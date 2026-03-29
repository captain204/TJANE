"use client";

import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function AngerManagementIntakePage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        // 1. Participant Information
        fullName: '',
        dob: '',
        gender: '',
        phone: '',
        email: '',
        address: '',
        emergencyContactName: '',
        emergencyContactPhone: '',

        // 2. Referral Information
        referralSource: '',
        otherReferralSource: '',
        courtName: '',
        caseNumber: '',
        probationOfficer: '',
        poContact: '',
        completionDate: '',

        // 3. History of Anger / Conflict
        previousClass: '',
        previousClassDate: '',
        behaviors: {
            physicalFights: '',
            domesticDisputes: '',
            verbalAggression: '',
            propertyDamage: '',
            roadRage: ''
        },

        // 4. Anger Triggers
        triggers: [] as string[],
        otherTrigger: '',

        // 5. Typical Response to Anger
        responses: [] as string[],
        otherResponse: '',

        // 6. Anger Frequency
        frequency: '',
        intensity: '',

        // 7. Consequences of Anger
        consequences: {
            relationships: '',
            employment: '',
            legal: '',
            school: '',
            physicalFights: ''
        },
        consequencesExplanation: '',

        // 8. Current Coping Skills
        copingSkills: [] as string[],
        otherCopingSkill: '',

        // 9. Personal Goals
        goals: [] as string[],
        otherGoal: '',
        participantGoals: '',

        // 10. Self-Rating Anger Scale
        angerScale: '5',

        // 11. Participant Agreement
        agreed: false,
        signature: '',
        dateSigned: ''
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const fullName = params.get('fullName');
            const email = params.get('email');
            const phone = params.get('phone');

            if (fullName || email || phone) {
                setFormData(prev => ({
                    ...prev,
                    ...(fullName && { fullName }),
                    ...(email && { email }),
                    ...(phone && { phone }),
                }));
            }
        }
    }, []);

    const handleCheckboxChange = (field: 'triggers' | 'responses' | 'copingSkills' | 'goals', value: string) => {
        setFormData(prev => {
            const currentList = prev[field];
            if (currentList.includes(value)) {
                return { ...prev, [field]: currentList.filter(item => item !== value) };
            } else {
                return { ...prev, [field]: [...currentList, value] };
            }
        });
    };

    const handleBehaviorChange = (field: keyof typeof formData.behaviors, value: string) => {
        setFormData(prev => ({
            ...prev,
            behaviors: { ...prev.behaviors, [field]: value }
        }));
    };

    const handleConsequenceChange = (field: keyof typeof formData.consequences, value: string) => {
        setFormData(prev => ({
            ...prev,
            consequences: { ...prev.consequences, [field]: value }
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        if (!formData.agreed) {
            setError('You must agree to the participant agreement to submit this form.');
            setIsSubmitting(false);
            return;
        }

        try {
            const res = await fetch('/api/anger-management-intake', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Failed to submit form');

            setIsSuccess(true);
        } catch (err: any) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
                <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg border border-green-100 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Form Submitted Successfully!</h2>
                    <p className="text-gray-600 mb-6">
                        Thank you for submitting your intake and assessment form for the 12-Session Anger Management program. We will review your information shortly.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-primary-700"
                    >
                        Return to Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-brand-primary-900 p-8 text-white text-center">
                    <h1 className="text-3xl font-bold mb-2">Anger Management Intake & Assessment Form</h1>
                    <p className="text-brand-primary-100 text-lg">Program: 12-Session Anger Management</p>
                </div>

                <form onSubmit={handleSubmit} className="p-8 space-y-12">

                    {/* 1. Participant Information */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-6">1. Participant Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                <input type="date" required className="w-full px-4 py-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary" value={formData.dob} onChange={e => setFormData({ ...formData, dob: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary" value={formData.gender} onChange={e => setFormData({ ...formData, gender: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input type="tel" required className="w-full px-4 py-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" required className="w-full px-4 py-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Home Address</label>
                                <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary" value={formData.address} onChange={e => setFormData({ ...formData, address: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Name</label>
                                <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary" value={formData.emergencyContactName} onChange={e => setFormData({ ...formData, emergencyContactName: e.target.value })} />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Phone</label>
                                <input type="tel" required className="w-full px-4 py-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary" value={formData.emergencyContactPhone} onChange={e => setFormData({ ...formData, emergencyContactPhone: e.target.value })} />
                            </div>
                        </div>
                    </section>

                    {/* 2. Referral Information */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-6">2. Referral Information</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">How were you referred to this program?</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {['Court Ordered', 'Probation / Parole', 'Employer Referral', 'School Referral', 'Self-Referral', 'Family Referral', 'Other'].map(src => (
                                        <label key={src} className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="referralSource" value={src} checked={formData.referralSource === src} onChange={e => setFormData({ ...formData, referralSource: e.target.value })} className="text-brand-primary focus:ring-brand-primary" />
                                            <span className="text-sm text-gray-700">{src}</span>
                                        </label>
                                    ))}
                                </div>
                                {formData.referralSource === 'Other' && (
                                    <input type="text" placeholder="Please specify..." className="mt-3 w-full px-4 py-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary" value={formData.otherReferralSource} onChange={e => setFormData({ ...formData, otherReferralSource: e.target.value })} />
                                )}
                            </div>

                            {formData.referralSource === 'Court Ordered' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg border">
                                    <h3 className="md:col-span-2 font-medium text-gray-900 border-b pb-2">If Court Ordered:</h3>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Court Name</label>
                                        <input type="text" className="w-full px-3 py-2 border rounded-md" value={formData.courtName} onChange={e => setFormData({ ...formData, courtName: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Case Number</label>
                                        <input type="text" className="w-full px-3 py-2 border rounded-md" value={formData.caseNumber} onChange={e => setFormData({ ...formData, caseNumber: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Probation Officer</label>
                                        <input type="text" className="w-full px-3 py-2 border rounded-md" value={formData.probationOfficer} onChange={e => setFormData({ ...formData, probationOfficer: e.target.value })} />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1">PO Phone / Email</label>
                                        <input type="text" className="w-full px-3 py-2 border rounded-md" value={formData.poContact} onChange={e => setFormData({ ...formData, poContact: e.target.value })} />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-medium text-gray-700 mb-1">Required Completion Date</label>
                                        <input type="date" className="w-full px-3 py-2 border rounded-md" value={formData.completionDate} onChange={e => setFormData({ ...formData, completionDate: e.target.value })} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* 3. History of Anger / Conflict */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-6">3. History of Anger / Conflict</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Have you previously taken an anger management class?</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="prevClass" value="Yes" checked={formData.previousClass === 'Yes'} onChange={e => setFormData({ ...formData, previousClass: e.target.value })} className="text-brand-primary focus:ring-brand-primary" /> Yes
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input type="radio" name="prevClass" value="No" checked={formData.previousClass === 'No'} onChange={e => setFormData({ ...formData, previousClass: e.target.value })} className="text-brand-primary focus:ring-brand-primary" /> No
                                    </label>
                                </div>
                                {formData.previousClass === 'Yes' && (
                                    <div className="mt-3">
                                        <label className="block text-sm text-gray-600 mb-1">If yes, when?</label>
                                        <input type="text" className="w-full px-4 py-2 border rounded-lg" value={formData.previousClassDate} onChange={e => setFormData({ ...formData, previousClassDate: e.target.value })} />
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">Behaviors (Check Yes or No)</label>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Behavior</th>
                                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Yes</th>
                                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {[
                                                { id: 'physicalFights', label: 'Physical fights' },
                                                { id: 'domesticDisputes', label: 'Domestic disputes' },
                                                { id: 'verbalAggression', label: 'Verbal aggression' },
                                                { id: 'propertyDamage', label: 'Property damage' },
                                                { id: 'roadRage', label: 'Road rage incidents' }
                                            ].map((item) => (
                                                <tr key={item.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.label}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                                        <input type="radio" name={item.id} value="Yes" checked={formData.behaviors[item.id as keyof typeof formData.behaviors] === 'Yes'} onChange={() => handleBehaviorChange(item.id as any, 'Yes')} className="text-brand-primary" />
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                                        <input type="radio" name={item.id} value="No" checked={formData.behaviors[item.id as keyof typeof formData.behaviors] === 'No'} onChange={() => handleBehaviorChange(item.id as any, 'No')} className="text-brand-primary" />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. Anger Triggers */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-6">4. Anger Triggers</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {['Disrespect', 'Being ignored', 'Family conflict', 'Relationship problems', 'Financial stress', 'Work stress', 'Traffic / driving', 'Feeling misunderstood', 'Alcohol / substance use', 'Other'].map(trigger => (
                                <label key={trigger} className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={formData.triggers.includes(trigger)} onChange={() => handleCheckboxChange('triggers', trigger)} className="rounded text-brand-primary focus:ring-brand-primary" />
                                    <span className="text-sm text-gray-700">{trigger}</span>
                                </label>
                            ))}
                        </div>
                        {formData.triggers.includes('Other') && (
                            <input type="text" placeholder="Other trigger..." className="mt-3 w-full px-4 py-2 border rounded-lg" value={formData.otherTrigger} onChange={e => setFormData({ ...formData, otherTrigger: e.target.value })} />
                        )}
                    </section>

                    {/* 5. Typical Response to Anger */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-6">5. Typical Response to Anger</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {['Yelling or shouting', 'Walking away', 'Physical aggression', 'Breaking objects', 'Shutting down emotionally', 'Using substances', 'Talking to someone', 'Exercising / physical activity', 'Other'].map(resp => (
                                <label key={resp} className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={formData.responses.includes(resp)} onChange={() => handleCheckboxChange('responses', resp)} className="rounded text-brand-primary focus:ring-brand-primary" />
                                    <span className="text-sm text-gray-700">{resp}</span>
                                </label>
                            ))}
                        </div>
                        {formData.responses.includes('Other') && (
                            <input type="text" placeholder="Other response..." className="mt-3 w-full px-4 py-2 border rounded-lg" value={formData.otherResponse} onChange={e => setFormData({ ...formData, otherResponse: e.target.value })} />
                        )}
                    </section>

                    {/* 6. Anger Frequency */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-6">6. Anger Frequency</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">How often do you feel angry?</label>
                                <div className="flex flex-wrap gap-4">
                                    {['Rarely', 'Sometimes', 'Often', 'Very Often', 'Daily'].map(freq => (
                                        <label key={freq} className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="frequency" value={freq} checked={formData.frequency === freq} onChange={e => setFormData({ ...formData, frequency: e.target.value })} className="text-brand-primary focus:ring-brand-primary" />
                                            <span className="text-sm text-gray-700">{freq}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">How intense is your anger when it occurs?</label>
                                <div className="flex flex-wrap gap-4">
                                    {['Mild', 'Moderate', 'Severe', 'Extreme'].map(intensity => (
                                        <label key={intensity} className="flex items-center gap-2 cursor-pointer">
                                            <input type="radio" name="intensity" value={intensity} checked={formData.intensity === intensity} onChange={e => setFormData({ ...formData, intensity: e.target.value })} className="text-brand-primary focus:ring-brand-primary" />
                                            <span className="text-sm text-gray-700">{intensity}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 7. Consequences of Anger */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-6">7. Consequences of Anger</h2>
                        <div className="space-y-4">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Area</th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Yes</th>
                                            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">No</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {[
                                            { id: 'relationships', label: 'Relationships' },
                                            { id: 'employment', label: 'Employment' },
                                            { id: 'legal', label: 'Legal problems' },
                                            { id: 'school', label: 'School performance' },
                                            { id: 'physicalFights', label: 'Physical fights' }
                                        ].map((item) => (
                                            <tr key={item.id}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.label}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                                    <input type="radio" name={`cons_${item.id}`} value="Yes" checked={formData.consequences[item.id as keyof typeof formData.consequences] === 'Yes'} onChange={() => handleConsequenceChange(item.id as any, 'Yes')} className="text-brand-primary" />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                                    <input type="radio" name={`cons_${item.id}`} value="No" checked={formData.consequences[item.id as keyof typeof formData.consequences] === 'No'} onChange={() => handleConsequenceChange(item.id as any, 'No')} className="text-brand-primary" />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Please explain if applicable:</label>
                                <textarea rows={3} className="w-full px-4 py-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary" value={formData.consequencesExplanation} onChange={e => setFormData({ ...formData, consequencesExplanation: e.target.value })}></textarea>
                            </div>
                        </div>
                    </section>

                    {/* 8. Current Coping Skills */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-6">8. Current Coping Skills</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {['Deep breathing', 'Walking away', 'Talking to someone', 'Exercise', 'Prayer / meditation', 'Listening to music', 'None', 'Other'].map(skill => (
                                <label key={skill} className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={formData.copingSkills.includes(skill)} onChange={() => handleCheckboxChange('copingSkills', skill)} className="rounded text-brand-primary focus:ring-brand-primary" />
                                    <span className="text-sm text-gray-700">{skill}</span>
                                </label>
                            ))}
                        </div>
                        {formData.copingSkills.includes('Other') && (
                            <input type="text" placeholder="Other coping skill..." className="mt-3 w-full px-4 py-2 border rounded-lg" value={formData.otherCopingSkill} onChange={e => setFormData({ ...formData, otherCopingSkill: e.target.value })} />
                        )}
                    </section>

                    {/* 9. Personal Goals */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-6">9. Personal Goals for This Program</h2>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                            {['Better emotional control', 'Improve relationships', 'Learn coping skills', 'Meet court requirements', 'Reduce stress', 'Improve communication', 'Other'].map(goal => (
                                <label key={goal} className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={formData.goals.includes(goal)} onChange={() => handleCheckboxChange('goals', goal)} className="rounded text-brand-primary focus:ring-brand-primary" />
                                    <span className="text-sm text-gray-700">{goal}</span>
                                </label>
                            ))}
                        </div>
                        {formData.goals.includes('Other') && (
                            <input type="text" placeholder="Other goal..." className="mb-4 w-full px-4 py-2 border rounded-lg" value={formData.otherGoal} onChange={e => setFormData({ ...formData, otherGoal: e.target.value })} />
                        )}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Participant Goals (Explain):</label>
                            <textarea rows={3} className="w-full px-4 py-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary" value={formData.participantGoals} onChange={e => setFormData({ ...formData, participantGoals: e.target.value })}></textarea>
                        </div>
                    </section>

                    {/* 10. Self-Rating Anger Scale */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 border-b pb-2 mb-6">10. Self-Rating Anger Scale</h2>
                        <div className="space-y-4">
                            <label className="block text-sm font-medium text-gray-700">On a scale from 1-10, how would you rate your anger?</label>
                            <div className="flex items-center gap-4">
                                <span className="text-xs text-gray-500 w-24 text-right">1 = Very Calm</span>
                                <input type="range" min="1" max="10" className="flex-1 h-2 bg-brand-primary-200 rounded-lg appearance-none cursor-pointer accent-brand-primary" value={formData.angerScale} onChange={e => setFormData({ ...formData, angerScale: e.target.value })} />
                                <span className="text-xs text-gray-500 w-32">10 = Extremely Angry / Out of Control</span>
                            </div>
                            <div className="text-center font-bold text-xl text-brand-primary">
                                Your Rating: {formData.angerScale} / 10
                            </div>
                        </div>
                    </section>

                    {/* 11. Participant Agreement */}
                    <section className="bg-brand-primary-50 p-6 rounded-xl border border-brand-primary-100">
                        <h2 className="text-xl font-semibold text-gray-900 border-b border-brand-primary-200 pb-2 mb-6">11. Participant Agreement</h2>
                        <div className="space-y-6">
                            <p className="text-sm text-gray-700">
                                I understand that the anger management program is designed to help me develop healthy coping skills, improve emotional regulation, and reduce harmful behaviors. I agree to participate respectfully and complete all required sessions.
                            </p>
                            <label className="flex items-start gap-3 cursor-pointer">
                                <input type="checkbox" required className="mt-1 rounded text-brand-primary focus:ring-brand-primary" checked={formData.agreed} onChange={e => setFormData({ ...formData, agreed: e.target.checked })} />
                                <span className="text-sm font-medium text-gray-900">I agree to the terms above.</span>
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Participant Signature (Type Full Name)</label>
                                    <input type="text" required className="w-full px-4 py-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary" value={formData.signature} onChange={e => setFormData({ ...formData, signature: e.target.value })} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                                    <input type="date" required className="w-full px-4 py-2 border rounded-lg focus:ring-brand-primary focus:border-brand-primary" value={formData.dateSigned} onChange={e => setFormData({ ...formData, dateSigned: e.target.value })} />
                                </div>
                            </div>
                        </div>
                    </section>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    <div className="flex justify-end pt-4 border-t">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-lg hover:bg-brand-primary-700 disabled:opacity-50 transition-colors font-bold shadow-lg shadow-brand-primary-200 text-lg w-full md:w-auto justify-center"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="animate-spin h-5 w-5" /> Submitting...
                                </>
                            ) : (
                                "Submit Assessment Form"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
